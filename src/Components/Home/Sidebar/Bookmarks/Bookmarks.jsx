// *** NPM ***
import React, { useEffect, useState } from 'react'
import { Table, Select } from 'antd';

import styles from './Bookmarks.module.scss'


const TableSelect = (props) => {
    const { defaultValue, elementId, dataIndex,  refreshMapMarkers, changeDeliveryPoint, locationVariants } = props
    const { Option } = Select

    const tableSelectHandler = (pointId) => {
        const newDeliveryPoint = locationVariants.find(item => item.id === pointId)
        changeDeliveryPoint({
            elementId,
            dataIndex,
            newDeliveryPoint,
            refreshMapMarkers
        })
    }
    
    return(
        <Select 
            defaultValue={defaultValue} 
            style={{ width: 100 }} 
            onChange={tableSelectHandler} 
            onClick={e => e.stopPropagation()}
        >
            {locationVariants?.map((location) => {
                return(
                    <Option key={location.id} value={location.id}>{location.name}</Option>
                )
            })}
      </Select>
    )
}


const OrderTable = (props) => {
    const { orders, setCurrentActiveLocation, changeDeliveryPoint, fetchOrders, locationVariants, fetchLocationVariants, isLoading } = props
    const [isRowActive, setRowActive] = useState(null)

    const columns = [
        {
            title: 'Location from',
            dataIndex: 'pick',
            key: 'pick',
            width: 200,
            render: (text, record) => {
                return(
                    <TableSelect
                        locationVariants={locationVariants} 
                        defaultValue={record.pick.name}
                        elementId={record.id}
                        dataIndex={'pick'}
                        changeDeliveryPoint={changeDeliveryPoint}
                        refreshMapMarkers={isRowActive === record.id ? true : false}
                    />
                )
            },
        },
        {
            title: 'Location to',
            dataIndex: 'deliver',
            key: 'deliver',
            width: 200,
            render: (text, record) => {
                return(                    
                    <TableSelect
                        locationVariants={locationVariants} 
                        defaultValue={record.deliver.name}
                        elementId={record.id} 
                        dataIndex={'deliver'}
                        changeDeliveryPoint={changeDeliveryPoint}
                        refreshMapMarkers={isRowActive === record.id ? true : false}
                    />
                )
                
            },
        },
        {
            title: 'Vehicle',
            dataIndex: 'vehicle',
            key: 'vehicle',
            width: 200,
            minWidth: 500,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: 100,
        },
    ]
    
    const clickHandler = (event, tableRow) => {
        setCurrentActiveLocation({
            pick_position: tableRow.pick.position,
            deliver_position: tableRow.deliver.position,            
        })
        setRowActive(tableRow.id)
    }

    useEffect(()=> {
        fetchOrders()
        fetchLocationVariants()
    },[])

    return(
        <section className={styles.orderTable}>
            <Table
                dataSource={orders}
                columns={columns}
                loading={isLoading}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => clickHandler(event, record),
                    };
                }}
                scroll={{ x:'max-content' }}
                rowClassName={(record, index) => record.id === isRowActive? styles.activeRow :  ''}
            />            
        </section>
    )
}

export default OrderTable
