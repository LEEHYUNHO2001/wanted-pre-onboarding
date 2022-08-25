import { QnAContainer } from '@components/QnA';
import { API_ENDPOINT } from '@constants';
import { fetcher } from '@utils/fetcher';
import { GetStaticProps, NextPage } from 'next';
import useSWR, { SWRConfig } from 'swr';

const ContactsPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <QnAType />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const QnATypeData = await fetcher(`${API_ENDPOINT}/qa-types`);
  return {
    props: {
      fallback: {
        [`${API_ENDPOINT}/qa-types`]: QnATypeData,
      },
    },
  };
};

function QnAType() {
  const { data: QnATypeData, error: QnATypeError } = useSWR(
    `${API_ENDPOINT}/qa-types`
  );
  if (!QnATypeData) return <div>로딩</div>;
  if (QnATypeError) return <div>에러</div>;

  return <QnAContainer QnATypeData={QnATypeData.qaTypes} />;
}

export default ContactsPage;
