import { Item } from '@components/item/Item';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ItemsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <>{id && <Item id={id} />}</>;
};

export default ItemsPage;
