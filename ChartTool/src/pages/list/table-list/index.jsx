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
  Checkbox 
} from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less'
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';
/**
 * 添加节点
 * @param fields
 */
const user = [
  {
    key:1,
    name:'lin',
    desc:'lin1'
  },
  {
    key:2,
    name:'meng',
    desc:'lin2'
  }
];
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    // return <Input/>
    return <Checkbox >确认</Checkbox>
  //   <Switch
  //   checkedChildren={<Icon type="check" />}
  //   unCheckedChildren={<Icon type="close" />}
  // />;
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
              initialValue: record[dataIndex],
            })(this.getInput())}
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
      userInfo:user,
      columns:[
        {
          title: '日期',
          dataIndex: 'date',
          editable:true
        },
        {
          title: '时间',
          dataIndex: 'time',
          editable: true
        },
        {
          title: '音频光端机',
          dataIndex: 'ypgdj',
          editable: true
        },
        {
          title: '音频二选一',
          dataIndex: 'ypexy',
          editable: true
        },
        {
          title: '手动节目源选择',
          dataIndex: 'sdjmyxz',
          editable: true
        },
        {
          title: '运维系统',
          dataIndex: 'ywxt',
          editable: true
        },
        {
          title: '频率调度系统',
          dataIndex: 'plddxt',
          editable: true
        },
        {
          title: '监控系统',
          dataIndex: 'jkxt',
          editable: true
        },
        {
          title: '天控系统',
          dataIndex: 'tkxt',
          editable: true
        },
        {
          title: '恒温系统',
          dataIndex: 'hwxt',
          editable: true
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (text, record) => {
            const { editingKey } = this.state;
            const editable = this.isEditing(record);
            return editable ? (
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
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                <a>取消</a>
              </Popconfirm>
            </span>
            ) : (
              <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
                修改
              </a>
            );
          },
        },
      ]
    };
  }
    addTableRow=()=> {
      const {userInfo} = this.state;
      this.setState({userInfo:[...userInfo,{key:userInfo.length+1,name:'',desc:''}]});
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
    const {userInfo,columns,data} = this.state;
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
                  <DatePicker placeholder="请输入" mode={'month'}/>
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
          <Alert message={'xxxx年 xx月'} style={{marginBottom:5}}/>
          {console.log(userInfo)}
          <EditableContext.Provider value={this.props.form}>
            <Table
              components={components}
              className={'font-small-table'}
              columns={newcolumns}
              pagination={false}
              key={'name'}
              dataSource={data}
            />
          </EditableContext.Provider>
        </div>
        <Button type="dashed" style={{marginTop:8,width:'100%'}} onClick={this.addTableRow}><strong>+</strong></Button>
      </PageHeaderWrapper>
    );
  }
};

export default Form.create()(TableList);

 
  

