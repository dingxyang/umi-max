import { PageContainer } from '@ant-design/pro-components';
import Table from './Table';
import ParseContent from './ParseContent';

const App = () => {

  return (
    <PageContainer
      header={{
        title: 'Web Excel',
      }}
      className="bg-blue-100 h-full"
    >
      <Table />
      <ParseContent />
    </PageContainer>
  );
};

export default App;
