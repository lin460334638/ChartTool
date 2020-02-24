import { DownOutlined, PlusOutlined } from '@ant-design/icons';
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
  ConfigProvider
} from 'antd';
import zhCN from 'antd/es/date-picker/locale/zh_CN';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import moment from 'moment';
import styles from './index.less'
const {MonthPicker} = DatePicker;
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
    ypgdj:1,
    ypexy:1,
    sdjmyxz:1,
    ywxt:1,
    plddxt:1,
    jkxt:1,
    tkxt:1,
    hwxt:1,
    dpm:1,
    zlbzxt:1,
    tfdjcy:1,
    ypclq:1,
    gyzs:1,
    operator:'杨韬',
    isEdit:0
  },
  {
    key:2,
    date:'2020-02-25',
    time:'16:15:24',
    ypgdj:1,
    ypexy:1,
    sdjmyxz:1,
    ywxt:1,
    plddxt:1,
    jkxt:1,
    tkxt:1,
    hwxt:1,
    dpm:1,
    zlbzxt:1,
    tfdjcy:1,
    ypclq:1,
    gyzs:1,
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
          title: '音频光端机',
          dataIndex: 'ypgdj',
          width:100,
          editable: true,
          render:(text,record)=>{
            if(text===1) {
              return <Checkbox disabled checked={text?true:false}>确认</Checkbox>
            }else if(text===0){
              return;
            }
          }
        },
        {
          title: '音频二选一',
          dataIndex: 'ypexy',
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
          title: '运维系统',
          dataIndex: 'ywxt',
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
          title: '频率调度系统',
          dataIndex: 'plddxt',
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
          title: '监控系统',
          dataIndex: 'jkxt',
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
          title: '天控系统',
          dataIndex: 'tkxt',
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
          title: '恒温系统',
          dataIndex: 'hwxt',
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
          title: '质量保证系统',
          dataIndex: 'zlbzxt',
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
          title: '调幅度检测仪',
          dataIndex: 'tfdjcy',
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
          title: '音频处理器',
          dataIndex: 'ypclq',
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
          title: '高压指示',
          dataIndex: 'gyzs',
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
          dataIndex: 'operation',
          width: 100,
          render: (text, record) => {
            const { editingKey } = this.state;
            const editable = this.isEditing(record);
            if(record['isEdit']){
              return editable? (
                <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    onClick={() => this.save(form, record.key)}
                    style={{ marginRight: 8 }}
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
            }else{
              return;
            }

          },
        },
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
            ypgdj:0,
            ypexy:0,
            sdjmyxz:0,
            ywxt:0,
            plddxt:0,
            jkxt:0,
            tkxt:0,
            hwxt:0,
            dpm:0,
            zlbzxt:0,
            tfdjcy:0,
            ypclq:0,
            gyzs:0,
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
      row.isEdit = 0;
      row['date'] = moment().format('YYYY-MM-DD');
      row['time'] = moment().format('HH:mm:ss')
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
                  name="desc"
                  rules={[
                    {
                      required: true,
                      message: '请输入至少五个字符的规则描述！',
                      min: 5,
                    },
                  ]}
                >
                  {getFieldDecorator('date', {
                    initialValue: moment()
                  })( <MonthPicker locale={zhCN} placeholder="请输入" />)}

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
          <Button type={'primary'} style={{float:'right',marginBottom:8}}>导出</Button>
          {/*<Alert message={'2020年 02月'} style={{marginBottom:5}}/>*/}
          <EditableContext.Provider value={this.props.form}>
            <Table
              components={components}
              className={'font-small-table'}
              columns={newcolumns}
              pagination={false}
              rowKey={'key'}
              dataSource={data}
              scroll={{ x: 1740 }}
            />
          </EditableContext.Provider>
        </div>
        <Button type="dashed" style={{marginTop:8,width:'100%'}} onClick={this.addTableRow}><strong>+</strong></Button>
      </PageHeaderWrapper>
    );
  }
};

export default Form.create()(TableList);

 
  

