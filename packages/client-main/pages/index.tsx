import type { NextPage } from 'next';
import { COMMON_CONST } from '@common/const';
import { ICommon } from '@common/types';

const Home: NextPage = () => {
  const obj: ICommon = {
    name: COMMON_CONST,
  };
  console.log(obj.name);
  return <div>메인</div>;
};

export default Home;
