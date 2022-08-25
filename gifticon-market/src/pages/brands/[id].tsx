import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ItemList } from '@components/itemList';

const BrandsPage: NextPage = () => {
  const router = useRouter();
  const { id, categoryId } = router.query;
  const catId = categoryId && JSON.parse(categoryId as string);

  return (
    <section>
      {id && categoryId && <ItemList id={id} categoryId={catId} />}
    </section>
  );
};

export default BrandsPage;
