import { useRouter } from "next/router";

const DynamicComponent = () => {
  const router = useRouter();

  console.log(router.query.slug);

  return <div>boja muskil</div>;
};

export default DynamicComponent;
