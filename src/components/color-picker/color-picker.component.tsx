import React from 'react';
import './color-picker.component.scss';

class ColorPicker extends React.Component<{ updateColor: any }, { color: string | undefined }> {
  assignColor(color: any): void {
    this.setState({
      color: color.target.value
    });
    this.props.updateColor(color.target.value);
  }

  render() {
    return (
      <div className='color-picker'>
        <div className='form-element'>
          <label htmlFor='reminder-color-picker'>Choose a color</label>
          <select id='reminder-color-picker' value={this.state?.color ?? ''} onChange={this.assignColor.bind(this)}>
            <option value='' disabled>Pick a color</option>
            <option value='red'>Red</option>
            <option value='white'>White</option>
            <option value='blue'>Blue</option>
          </select>
        </div>
        {
          this.state?.color
            ? <div className={`color-picker__color color-picker__color--${this.state.color}`}></div>
            : ''
        }
      </div>
    )
  }
}

export default ColorPicker;
