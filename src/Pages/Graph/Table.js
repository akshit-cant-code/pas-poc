import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { StyledEngineProvider } from '@mui/material/styles';
import clsx from 'clsx';

import ProgressBar from '../../Components/Progress';
import { useState, useEffect } from "react";
import { COLUMNS_DIMENSION_PROPERTIES } from '@mui/x-data-grid/hooks/features/columns/gridColumnsUtils';



function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }
  
  const GridCellExpand = React.memo(function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);
  
    const handleMouseEnter = () => {
      const isCurrentlyOverflown = isOverflown(cellValue.current);
      setShowPopper(isCurrentlyOverflown);
      setAnchorEl(cellDiv.current);
      setShowFullCell(true);
    };
  
    const handleMouseLeave = () => {
      setShowFullCell(false);
    };
  
    React.useEffect(() => {
      if (!showFullCell) {
        return undefined;
      }
  
      function handleKeyDown(nativeEvent) {
        // IE11, Edge (prior to using Bink?) use 'Esc'
        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
          setShowFullCell(false);
        }
      }
  
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [setShowFullCell, showFullCell]);
  
    return (
      <Box
        ref={wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          alignItems: 'center',
          lineHeight: '24px',
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
        }}
      >
        <Box
          ref={cellDiv}
          sx={{
            height: '100%',
            width,
            display: 'block',
            position: 'absolute',
            top: 0,
            '& .super-app-theme--cell': {
                backgroundColor: 'rgba(224, 183, 60, 0.55)',
                color: '#1a3e72',
                fontWeight: '600',
              },
              '& .super-app.negative': {
                backgroundColor: 'rgba(157, 255, 118, 0.49)',
                color: '#1a3e72',
                fontWeight: '600',
              },
              '& .super-app.positive': {
                backgroundColor: '#d47483',
                color: '#1a3e72',
                fontWeight: '600',
              },
          }}
        />
        <Box
          ref={cellValue}
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', }}
        >
          {value}
        </Box>
        {showPopper && (
          <Popper
            open={showFullCell && anchorEl !== null}
            anchorEl={anchorEl}
            style={{ width:"auto", marginLeft: -17 }}
          >
            <Paper
              elevation={1}
              style={{ minHeight: wrapper.current.offsetHeight - 3 }}
            >
              <Typography variant="body2" style={{ padding: 8 }}>
                {value}
              </Typography>
            </Paper>
          </Popper>
        )}
      </Box>
    );
  });
  
  GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };
  
  function renderCellExpand(params) {
    return (
      <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
    );
  }
  
  renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: PropTypes.string,
  };

var column =[]

var dataList = [
  {
    "name": null,
    "type": "scatter",
    "symbolSize": 5,
    "data": [],
    "seriesData": [
      {
        "name": "earthquake",
        "tags": null,
        "columns": [
          "time",
          "cdi",
          "code",
          "depth",
          "detail",
          "dmin",
          "felt",
          "gap",
          "id",
          "ids",
          "lat",
          "lon",
          "mag",
          "magType",
          "net",
          "nst",
          "place",
          "rms",
          "sig",
          "sources",
          "status",
          "title",
          "tsunami",
          "types",
          "url"
        ],
        "values": [
          [
            "2022-06-30T04:31:13.21Z",
            null,
            "40294040",
            90.62,
            "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40294040.geojson",
            0.06568,
            null,
            77,
            "ci40294040",
            ",ci40294040,",
            33.2965,
            -116.7278333,
            0.49,
            "ml",
            "ci",
            14,
            "7km NNE of Lake Henshaw, CA",
            0.18,
            4,
            ",ci,",
            "automatic",
            "M 0.5 - 7km NNE of Lake Henshaw, CA",
            0,
            ",nearby-cities,origin,phase-data,scitech-link,",
            "https://earthquake.usgs.gov/earthquakes/eventpage/ci40294040"
          ],
          [
            "2022-06-30T04:33:02.337Z",
            null,
            "00841972",
            30,
            "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nn00841972.geojson",
            0.406,
            null,
            92.23,
            "nn00841972",
            ",nn00841972,",
            39.3962,
            -118.097,
            1.5,
            "ml",
            "nn",
            13,
            "53 km E of Fallon Station, Nevada",
            0.1452,
            35,
            ",nn,",
            "automatic",
            "M 1.5 - 53 km E of Fallon Station, Nevada",
            0,
            ",origin,phase-data,",
            "https://earthquake.usgs.gov/earthquakes/eventpage/nn00841972"
          ],
            [
              "2022-09-30T04:31:13.21Z",
              null,
              "40294540",
              50.62,
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40294040.geojson",
              0.06568,
              null,
              33,
              "ci40294040",
              ",ci40294040,",
              33.2965,
              -116.7278333,
              0.49,
              "ml",
              "ci",
              14,
              "7km NNE of Lake Henshaw, CA",
              0.18,
              4,
              ",ci,",
              "automatic",
              "M 0.5 - 7km NNE of Lake Henshaw, CA",
              0,
              ",nearby-cities,origin,phase-data,scitech-link,",
              "https://earthquake.usgs.gov/earthquakes/eventpage/ci40294049"
            ],
              [
                "2022-06-30T04:34:13.21Z",
                null,
                "40294840",
                19.62,
                "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40294040.geojson",
                0.06568,
                null,
                55,
                "ci40294040",
                ",ci40294040,",
                34.2965,
                -116.7278333,
                0.49,
                "ml",
                "ci",
                14,
                "7km NNE of Lake Henshaw, CA",
                0.18,
                4,
                ",ci,",
                "automatic",
                "M 0.5 - 7km NNE of Lake Henshaw, CA",
                0,
                ",nearby-cities,origin,phase-data,scitech-link,",
                "https://earthquake.usgs.gov/earthquakes/eventpage/ci40294043"
              ],
                [
                  "2022-07-30T04:31:13.21Z",
                  null,
                  "402666040",
                  30.62,
                  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40294040.geojson",
                  0.06568,
                  null,
                  73,
                  "ci40294040",
                  ",ci40294040,",
                  33.2965,
                  -116.7278333,
                  0.49,
                  "ml",
                  "ci",
                  14,
                  "7km NNE of Lake Henshaw, CA",
                  0.18,
                  4,
                  ",ci,",
                  "automatic",
                  "M 0.5 - 7km NNE of Lake Henshaw, CA",
                  0,
                  ",nearby-cities,origin,phase-data,scitech-link,",
                  "https://earthquake.usgs.gov/earthquakes/eventpage/ci40299040"
                ],
                  [
                    "2022-06-30T04:31:53.21Z",
                    null,
                    "40294046",
                    40.62,
                    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40294040.geojson",
                    0.06568,
                    null,
                    17,
                    "ci40294040",
                    ",ci40294040,",
                    33.2965,
                    -116.7278333,
                    0.49,
                    "ml",
                    "ci",
                    14,
                    "7km NNE of Lake Henshaw, CA",
                    0.18,
                    4,
                    ",ci,",
                    "automatic",
                    "M 0.5 - 7km NNE of Lake Henshaw, CA",
                    0,
                    ",nearby-cities,origin,phase-data,scitech-link,",
                    "https://earthquake.usgs.gov/earthquakes/eventpage/ci40294940"
                  ],
                    [
                      "2022-06-30T04:01:13.21Z",
                      null,
                      "40244040",
                      90.62,
                      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40294040.geojson",
                      0.06568,
                      null,
                      47,
                      "ci40294040",
                      ",ci40294040,",
                      33.2965,
                      -116.7278333,
                      0.49,
                      "ml",
                      "ci",
                      14,
                      "7km NNE of Lake Henshaw, CA",
                      0.18,
                      4,
                      ",ci,",
                      "automatic",
                      "M 0.5 - 7km NNE of Lake Henshaw, CA",
                      0,
                      ",nearby-cities,origin,phase-data,scitech-link,",
                      "https://earthquake.usgs.gov/earthquakes/eventpage/ci40294040"
                    ],
                      [
                        "2022-06-30T04:21:13.21Z",
                        null,
                        "40294040",
                        90.62,
                        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40294040.geojson",
                        0.06568,
                        null,
                        77,
                        "ci40294040",
                        ",ci40294040,",
                        33.2965,
                        -116.7278333,
                        0.49,
                        "ml",
                        "ci",
                        14,
                        "7km NNE of Lake Henshaw, CA",
                        0.18,
                        4,
                        ",ci,",
                        "automatic",
                        "M 0.5 - 7km NNE of Lake Henshaw, CA",
                        0,
                        ",nearby-cities,origin,phase-data,scitech-link,",
                        "https://earthquake.usgs.gov/earthquakes/eventpage/ci40294840"
                      ]
        ]
      }
    ]
  }
]

export default function Table() {
  // const [dataList, setState] = useState({});
  // useEffect(() => {
  //   fetch("https://localhost:7239/InfluxClient?query=select * from earthquake").then((res) => res.json())
  //   .then(
  //     (result) => {
  //       setState({
  //             isLoaded: true,
  //             dataList: result
  //         });
  //     })    
  // }, []);
  var temp = dataList[0].seriesData[0].columns
  var values = dataList[0].seriesData[0].values
    for(var i =0; i<temp.length; i++){
      
      if(i==3){
        column[i] = {field: i, headerName: temp[i], width: 200,renderCell: (params) =>  { return  <ProgressBar progress={Number(params.row[3])} ></ProgressBar>}}
      }
    else if(i==7){
        column[i] = {field: i, headerName: temp[i], width: 200,renderCell: (params) =>  {return  <ProgressBar progress={Number(params.row[7])} ></ProgressBar>}}
      }
      else{
      column[i] = {field: i, headerName: temp[i], width: 100,renderCell: renderCellExpand}}
      
    }

  return (

      <div style={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={values}
        columns={column}
        pageSize={7}
        hideFooter
        showCellRightBorder
        rowsPerPageOptions={[]}
        getRowId={(row) => row[0]}

        sx={{
        
          backgroundColor:'#1E1C1B',
          color:'white'
          }}
      />
    </div>
  );
}
