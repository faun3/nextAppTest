interface PageProps {
  params: { postId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = ({ params: { postId } }: PageProps) => {
  return <div>You are currently viewing the post with an id of {postId}</div>;
};
export default Page;
