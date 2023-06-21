import React, { useRef, useEffect } from 'react'
import heatmap from './lcheatmap.js'

const Chart = ({ data, container_id, style }) => {
    const chartRef = useRef(undefined)

    useEffect(() => {
        const chart = heatmap({ data, container_id })
        chartRef.current = { chart }
        return () => {
            chart.dispose()
            chartRef.current = undefined
        }
    }, [container_id]);
    console.log('Chart rendered')
    return (
        <div id={container_id} className='chart' style={style}></div>
    )
}

export default Chart
