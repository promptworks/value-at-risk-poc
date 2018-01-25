import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Table } from './table'
import { SecurityHeader, SecurityRow } from './security_row'


class SecurityTable extends Component {
  renderHeader = () => {
    if (this.props.topLevel) {
      return <SecurityHeader />
    }
  }

  renderRow = (row) => {
    return <SecurityRow key={ row.symbol } { ...row } />
  }

  render () {
    const { data: { loading, securities } } = this.props
    if (loading) {
      return <div>Fetching...</div>
    }

    return (
      <Table
        className='securities'
        renderHeader={ this.renderHeader }
        renderRow={ this.renderRow }
        rows={ securities } />
    )
  }
}

export default graphql(gql`
  query {
    securities {
      id
      symbol
      price
      quantity
      costBasis
      marketValue
      profitLoss
      valueAtRisk1
      valueAtRisk5
    }
  }
`)(SecurityTable)

