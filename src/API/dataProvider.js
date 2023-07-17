import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

export const API_URL = "http://3.65.149.62/test-api";

export const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  const accessToken = localStorage.getItem("accessToken");
  options.headers.set("Authorization", `Bearer ${accessToken}`);

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };

    const url = `${API_URL}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => {
      if (!headers.has("content-range")) {
        throw new Error(
          "The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?"
        );
      }

      if (Object.keys(params.filter).length) {
        localStorage.removeItem("hideList");
      }

      if (localStorage.getItem("hideList")) {
        return {
          data: [],
          total: 0,
        };
      }

      return {
        data: json.sort((a, b) => {
          switch (order) {
            case "ASC":
              return a[field] > b[field] ? 1 : -1;
            case "DESC":
              return a[field] > b[field] ? -1 : 1;
          }
        }),
        total: parseInt(
          (headers.get("content-range") || "0").split("/").pop() || 0,
          10
        ),
      };
    });
  },

  getOne: (resource, params) =>
    httpClient(`${API_URL}/${resource}/contact/${params.id}`).then(
      ({ json }) => ({
        data: json,
      })
    ),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${API_URL}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${API_URL}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(
        (headers.get("content-range") || "0").split("/").pop() || 0,
        10
      ),
    }));
  },

  update: (resource, params) =>
    httpClient(`${API_URL}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${API_URL}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),

  delete: (resource, params) =>
    httpClient(`${API_URL}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${API_URL}/${resource}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
};
