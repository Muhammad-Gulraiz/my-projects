import { useRouter } from "next/router";

const PageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;

  return (
    <div>
      <h1>My page number is: {pageNumber}</h1>
    </div>
  );
};

export default PageNo;
