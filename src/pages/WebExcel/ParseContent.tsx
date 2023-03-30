import { Input, Space } from 'antd';
import { handleCopyValue } from './util';
import { actions as webExcelActions } from '@/states/webExcel';

const { TextArea } = Input;

export default function ParseContent() {

  const onPaste = (e) => {
    // 从剪切板获取数据
    const clipboardData = e.clipboardData || window.clipboardData;
    let txtdata =
      clipboardData.getData('text/html') || clipboardData.getData('text/plain');
    console.log(txtdata);
    handleCopyValue(txtdata);
    const parser = new DOMParser();
    const dom = parser.parseFromString(txtdata, 'text/html');
    const table = dom.getElementsByTagName('table')[0];
    const trs = table.getElementsByTagName('tr');
    const copyDatas = [];
    for (let i = 0; i < trs.length; i++) {
      const tds = trs[i].getElementsByTagName('td');
      const copyData = [];
      for (let j = 0; j < tds.length; j++) {
        copyData.push(tds[j].innerText);
      }
      copyDatas.push(copyData);
    }
    webExcelActions.update(copyDatas);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <div>
        <Input onPaste={onPaste} />
      </div>
      <div>
        <TextArea
          showCount
          maxLength={100}
          style={{ height: 120, marginBottom: 24 }}
          placeholder="can resize"
        />
      </div>
    </Space>
  );
}
