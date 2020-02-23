import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker,Form } from 'antd';
import moment from 'moment';

class ReportDatePicker extends React.Component {

  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const { value,mode} = nextProps;
      let format = '';
      switch (mode) {
        case 'month':
          format = 'YYYYMM';
          break;
        case 'year':
          format = 'YYYY';
          break;
        case 'date':
          format = 'YYYYMMDD';
          break;
        default:
          format = 'YYYYMMDD';
          break;
      }
      let data = {
        date: value?moment(value,format):value,
        mode
      };
      return {
        ...({ ...data } || {}),
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    const value = props.value || {};
    this.state = {
      date: value,
    };
  }

  triggerChange = changedValue => {
    const { onChange, monthFormat } = this.props;
    const {mode} = this.state;
    let formatValue = null;
    if(changedValue){
      formatValue = changedValue.format(this.getFormatByMode(mode));
    }
    if (onChange) {
      onChange(formatValue);
    }
  };

  handleChange = (date, dateString) => {
    this.setState({
      date,
    });
    this.triggerChange(date);
  }
  handlePanelChange = (value, mode) => {
    this.setState({
      date: value,
    });
    this.triggerChange(value);
  };
  getFormatByMode=(mode)=>{
    let format = '';
    switch (mode) {
      case 'month':
        format = 'YYYYMM';
        break;
      case 'year':
        format = 'YYYY';
        break;
      case 'date':
        format = 'YYYYMMDD';
        break;
      default:
        format = 'YYYYMMDD';
        break;
    }
    return format;
  };
  getShowFormatByMode=(mode)=>{
    let format = '';
    switch (mode) {
      case 'month':
        format = 'YYYY-MM';
        break;
      case 'year':
        format = 'YYYY';
        break;
      case 'date':
        format = 'YYYY-MM-DD';
        break;
      default:
        format = 'YYYY-MM-DD';
        break;
    }
    return format;

  };
  render() {
    const { date, open,mode } = this.state;
    let format = this.getShowFormatByMode(mode);
    return (
      <span>
          <DatePicker
            value={date}
            mode={mode}
            format={format}
            onChange={this.handleChange}
            onPanelChange={this.handlePanelChange}
          />
      </span>
    );
  }
}
export default ReportDatePicker
