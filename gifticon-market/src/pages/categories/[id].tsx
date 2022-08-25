import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { CategoryBox } from '@components/category/CategoryBox';

const CategoriesPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <section>{id && <CategoryBox id={id} />}</section>;
};

export default CategoriesPage;
