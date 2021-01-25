import React from 'react'
import PropTypes from 'prop-types'
import { InputValue } from './styles'

function Input({ PlaceHolder, Type, onChange, Value }) {
  return (
    <InputValue
      placeholder={PlaceHolder}
      type={Type}
      value={Value}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  PlaceHolder: PropTypes.string,
  Type: PropTypes.string,
  onChange: PropTypes.func,
  Value: PropTypes.string,
}

Input.defaultProps = {
  PlaceHolder: 'Informe um valor',
  Type: 'text',
  onChange: null,
  Value: '',
}

export default Input
