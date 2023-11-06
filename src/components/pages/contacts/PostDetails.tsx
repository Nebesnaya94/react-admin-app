import { FC } from "react";
import Button from "@mui/material/Button";
import itemClose from "../../../assets/images/item_close.svg";
import { IPost } from "../../../models/types";
import { capitalize } from "../../../API/helpers";

interface IPostDetailsProps {
  post: IPost;
  handleClose: (record: IPost | null) => void;
}

export const PostDetails: FC<IPostDetailsProps> = ({ post, handleClose }) => {
  return (
    <div className="item-details">
      <div className="item-details__wrapper">
        <Button
          onClick={() => {
            handleClose(null);
          }}
          className="item-details__close"
        >
          <img src={itemClose} alt="item_close" />
        </Button>
        <div className="item-details__post post-data">
          <div className="post-data__title">
            {post?.id}. {capitalize(post?.title)}
          </div>
          <div className="post-data__description">
            <h5 className="post-data__description-label">Description:</h5>
            <p className="post-data__description-text">
              {capitalize(post?.description)}
            </p>
          </div>
          <div className="post-data__author">
            <div>created by {post?.author?.username}</div>
            <div>({post?.author?.name})</div>
          </div>
        </div>
      </div>
    </div>
  );
};
