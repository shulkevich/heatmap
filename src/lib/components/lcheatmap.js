const lcjs = require('@arction/lcjs')
const { lightningChart, PalettedFill, LUT, LegendBoxBuilders, emptyFill, UIOrigins, regularColorSteps, Themes } = lcjs

const heatmap = ({ data, container_id }) => {

    const container = document.getElementById(container_id);

    const dashboard = lightningChart().Dashboard({
        numberOfColumns: 1,
        numberOfRows: 1,
        container: container,
    })

    const theme = dashboard.getTheme()
    const palette = new PalettedFill({
        lookUpProperty: 'value',
        lut: new LUT({
            interpolate: true,
            steps: regularColorSteps(0, 100, theme.examples.intensityColorPalette),
        }),
    })

    const chart0 = dashboard
        .createChartXY({
            columnIndex: 0,
            rowIndex: 0,
        })
        .setTitleFillStyle(emptyFill)
        .setPadding({ top: 80 })

    const heatmap0 = chart0
        .addHeatmapGridSeries({
            columns: data[0].length,
            rows: data.length,
            dataOrder: 'rows',
        })
        .setFillStyle(palette)
        .setIntensityInterpolation('bilinear')
        .setCursorInterpolationEnabled(true)

    const legend0 = chart0
        .addLegendBox(LegendBoxBuilders.HorizontalLegendBox)
        .setAutoDispose({
            type: 'max-width',
            maxWidth: 0.5,
        })
        .add(chart0)
        .setPosition({ x: 100, y: 100 })
        .setOrigin(UIOrigins.RightTop)

    heatmap0.invalidateIntensityValues(data)

    return dashboard;

}

export default heatmap;