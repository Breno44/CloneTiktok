import Layout from "../components/Layout";
import Feed from "../components/Feed";
import Suggestions from "../components/Suggestions";

export default function Index({ posts = [] }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/79372658?v=4",
        name: "Breno Henrique",
        username: "brenohenrique",
      },
      description: "3 fast 3 furious",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "original sound - Will Smith",
      videoUrl:
        "https://v16m.tiktokcdn.com/9d05ad4d68d2ae8e171bf129a9988994/615f59bc/video/tos/useast2a/tos-useast2a-pve-0068/f298028c50dd473383a51a12a78b6ef3/?a=1233&br=1692&bt=846&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=1&er=&ft=98CcAeUL4kag3&l=202110071433560101890740382E04448B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3E8bjo6ZjgzODMzNzczM0ApZGhkZmlkO2U1Nzs3OGY4NGdjL2gvcjQwLWNgLS1kMTZzc14vNjMwMDIxMzUzXi8zNjE6Yw%3D%3D&vl=&vr=",
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 2,
        avatar: "https://avatars.githubusercontent.com/u/79372658?v=4",
        name: "Breno Henrique",
        username: "brenohenrique",
      },
      description: "3 fast 3 furious",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "original sound - Will Smith",
      videoUrl:
        "https://v16m.tiktokcdn.com/9d05ad4d68d2ae8e171bf129a9988994/615f59bc/video/tos/useast2a/tos-useast2a-pve-0068/f298028c50dd473383a51a12a78b6ef3/?a=1233&br=1692&bt=846&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=1&er=&ft=98CcAeUL4kag3&l=202110071433560101890740382E04448B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3E8bjo6ZjgzODMzNzczM0ApZGhkZmlkO2U1Nzs3OGY4NGdjL2gvcjQwLWNgLS1kMTZzc14vNjMwMDIxMzUzXi8zNjE6Yw%3D%3D&vl=&vr=",
      likes: 650,
      comments: 10,
      replies: 50,
    },
  ];

  return {
    props: {
      posts: data,
    },
  };
}
