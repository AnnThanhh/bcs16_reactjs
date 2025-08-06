import React, { memo } from "react";

const ContentChild = (props) => {
  console.log("content child render");
  return (
    <div>
      <h3>Content child</h3>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos
        voluptas, in, sint iste suscipit ratione deleniti sapiente consectetur
        aliquid vitae non ducimus. Pariatur excepturi dolor autem quam, adipisci
        at nihil. Quia harum optio aperiam numquam, nostrum beatae quos. Qui
        ratione vero est totam deleniti labore aliquid molestias possimus neque!
      </span>
      <p>
        <i className="fa fa-thumbs-up"></i>
        {props.likeProps.number}
      </p>
    </div>
  );
};

export default memo(ContentChild); //shallow compare props -> là một HOC (higher order component) được sử dụng để ghi nhớ một component để tránh việc render không cần thiết -> là props không có sự thay đổi thì component không được render lại
