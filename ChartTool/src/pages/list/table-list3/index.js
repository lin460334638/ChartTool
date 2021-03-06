import {DownOutlined, InfoCircleOutlined, PlusOutlined} from '@ant-design/icons';
import react from 'react'
import {
  Alert,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Input,
  Menu,
  message,
  Popconfirm,
  Row,
  Table,
  Switch, 
  Icon,
  Checkbox,
  Radio
} from 'antd';
import zhCN from 'antd/es/date-picker/locale/zh_CN';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import moment from 'moment';
import styles from './index.less'
moment.locale("zh-cn");
/**
 * 添加节点
 * @param fields
 */
const user = [
  {
    key:1,
    date:'2020-02-24',
    time:'17:15:24',
    lnqfj:1,
    lnqbyc:1,
    sdjmyxz:1,
    '1hwksdkzx':1,
    '1hwkzdkzx':1,
    sl:1,
    szg:1,
    chsfzgbt:1,
    dfbyc:1,
    jfzlnq:1,
    '1hlnqpdx':1,
    'jfzpdx':1,
    status:1,
    operator:'杨韬',
    isEdit:0
  },
  {
    key:1,
    date:'2020-02-24',
    time:'17:15:24',
    lnqfj:1,
    lnqbyc:1,
    sdjmyxz:1,
    '1hwksdkzx':1,
    '1hwkzdkzx':1,
    sl:1,
    szg:1,
    chsfzgbt:1,
    dfbyc:1,
    jfzlnq:1,
    '1hlnqpdx':1,
    'jfzpdx':1,
    status:1,
    operator:'杨韬',
    isEdit:0
  }
];
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getComponent = () => {
     return <Checkbox >确认</Checkbox>
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              // rules: [
              //   {
              //     required: true,
              //     message: `Please Input ${title}!`,
              //   },
              // ],
              initialValue: false,
            })(this.getComponent())}
          </Form.Item>
        ) : (
          children
        )
        
        }
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}
class TableList extends react.Component{
  constructor(props){
    super(props);
    this.state = {
      data:user,
      editingKey: '',
      columns:[
        {
          title:'',
          dataIndex:'status',
          width:20,
          render:(text,record)=>{
            return (record.status===0&&<InfoCircleOutlined style={{color:'red'}}/>)
          }
        },
        {
          title: '日期',
          dataIndex: 'date',
          width:120,
          align:'center',
        },
        {
          title: '时间',
          dataIndex: 'time',
          width:120,
          align:'center',
        },
        {
          title: '冷凝器风机',
          dataIndex: 'lnqfj',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '冷凝器百叶窗',
          dataIndex: 'lnqbyc',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '手动节目源选择',
          dataIndex: 'sdjmyxz',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '1号温控手动控制箱',
          dataIndex: '1hwksdkzx',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '1号温控自动控制箱',
          dataIndex: '1hwkzdkzx',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '水路',
          dataIndex: 'sl',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '树脂罐',
          dataIndex: 'szg',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '窗户是否在关闭态',
          dataIndex: 'chsfzgbt',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '顶风百叶窗',
          dataIndex: 'dfbyc',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '假负载冷凝器',
          dataIndex: 'jfzlnq',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '1号冷凝器配电箱',
          dataIndex: '1hlnqpdx',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '假负载配电箱',
          dataIndex: 'jfzpdx',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(!text){
              return;
            }
          }
        },
        {
          title: '抄表人',
          dataIndex: 'operator',
          width:100,
        },
        {
          title: '操作',
          fixed: "right",
          width: 100,
          dataIndex: 'operation',
          render: (text, record) => {
            const {editingKey} = this.state;
            const editable = this.isEditing(record);
            if (record['isEdit']) {
              return editable ? (
                <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    onClick={() => this.save(form, record.key)}
                    style={{marginRight: 8}}
                  >
                    保存
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="是否取消编辑?" onConfirm={() => this.cancel(record.key)}>
                <a>取消</a>
              </Popconfirm>
            </span>
              ) : (
                <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
                  编辑
                </a>
              );
            } else {
              return;
            }
          }
        }
      ]
    };
  }
    addTableRow=()=> {
      const {data} = this.state;
      this.setState({data:[...data,
          {
            key:data.length+1,
            date:'',
            time:'',
            lnqfj:0,
            lnqbyc:0,
            sdjmyxz:0,
            '1hwksdkzx':0,
            '1hwkzdkzx':0,
            sl:0,
            szg:0,
            chsfzgbt:0,
            dfbyc:0,
            jfzlnq:0,
            '1hlnqpdx':0,
            'jfzpdx':0,
            status:0,
            operator:'杨韬',
            isEdit:1
          },
        ]});
    };
  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      for(let key in row){
        if(row[key] === false){
          row.status=0;
          break;
        }
      }
      row.isEdit = 0;
      row['date'] = moment().format('YYYY-MM-DD');
      row['time'] = moment().format('HH:mm:ss');
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }
  render(){
    const {columns,data} = this.state;
    const {getFieldDecorator} = this.props.form;
    const components = {
      body: {
        cell: EditableCell,
      },
    };
    const newcolumns = columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };
    return (
      <PageHeaderWrapper>
        <div className={'form-search'} style={{height: 70}}>
          <Form {...formItemLayout}>
            <Row style={{marginLeft:'-8px',marginRight:'-8px'}}>
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6} style={{paddingLeft:8,paddingRight:8}}>
                <Form.Item
                  label="日期"
                  name="date"
                >
                  {getFieldDecorator('date', {
                    initialValue: moment()
                  })( <DatePicker locale={zhCN} placeholder="请输入" />)}

                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6} style={{paddingLeft:8,paddingRight:8}}>
                <Form.Item
                  label="状态"
                  name="status"
                >
                  {getFieldDecorator('status', {

                  })(
                    <Radio.Group>
                      <Radio.Button value="1">正常</Radio.Button>
                      <Radio.Button value="0">异常</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6} style={{paddingLeft:8,paddingRight:8}}>
                <Button type={'primary'} style={{marginRight:8}}>查询</Button>
                <Button>重置</Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <div>
            <span>机房：  </span><span>部门：  </span>
            <Button type={'primary'} style={{float:'right',marginBottom:8}}>导出</Button>
          </div>
          <EditableContext.Provider value={this.props.form}>
            <Table
              components={components}
              className={'font-small-table'}
              columns={newcolumns}
              pagination={false}
              rowKey={'key'}
              dataSource={data}
              scroll={{ x: 1540 }}
            />
          </EditableContext.Provider>
        </div>
        <Button type="dashed" style={{marginTop:8,width:'100%'}} onClick={this.addTableRow}><strong>+</strong></Button>
      </PageHeaderWrapper>
    );
  }
};

export default Form.create()(TableList);

 
  

