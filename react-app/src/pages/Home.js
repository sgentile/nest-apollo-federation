import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import moment from "moment";
import React, { useEffect } from "react";

import { GetPosts, GetUsers } from "../graphql/queries";
import { postAdded } from "../graphql/subscriptions";

function Home() {
  const { data, loading, subscribeToMore } = useQuery(GetPosts, {
    fetchPolicy: "network-only",
  });
  const { data: userData, loading: loadingUsers } = useQuery(GetUsers);

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: postAdded,
      updateQuery: (prev, { subscriptionData }) => {
        console.log("subscribers", subscriptionData);
        if (!subscriptionData.data) {
          return prev;
        }
        return {
          posts: [...prev.posts, subscriptionData.data.postAdded],
        };
      },
    });
    return () => unsubscribe && unsubscribe();
  }, [subscribeToMore]);

  if (loading || loadingUsers) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <nav>
        <p>
          {userData?.users?.length ? (
            <Link to="/post/add">Add a Post</Link>
          ) : (
            <p>
              No User Available - generate a default user in playground - see
              README
            </p>
          )}
        </p>
      </nav>
      <div>User Count: {userData?.users?.length || 0}</div>
      {data?.posts?.length ? (
        [...data.posts]
          .filter((post) => post !== null)
          .sort((a, b) =>
            Date.parse(parseInt(b.createdAt)) >
            Date.parse(parseInt(a.createdAt))
              ? 1
              : -1
          )
          .map(({ id, title, content, user, createdAt }) => (
            <article key={id}>
              <h1>{title}</h1>
              <p>Post ID: {id}</p>
              <p>
                Post Date:
                {new Date(parseInt(createdAt)).toDateString()}
                {" at "}
                {new Date(parseInt(createdAt)).toLocaleTimeString()}
                {" by "}
                {user.name}
              </p>
              <div>
                Post Content: <div>{content}</div>
              </div>
            </article>
          ))
      ) : (
        <p>No posts available!</p>
      )}
    </div>
  );
}

export default Home;
