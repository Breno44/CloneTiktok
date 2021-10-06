import { Container } from "./styles";
import PostCard from "../PostCard";

export default function Feed({ posts }) {
  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index} post={post}></PostCard>
      ))}
    </Container>
  );
}
