import tableGet from '../services/TableGet';

const getData = async (setData, setDataList) => {
  const fetchData = await tableGet();
  setData(fetchData);
  setDataList(fetchData);
};

export default getData;
