import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { StyledEngineProvider } from '@mui/material/styles';
import clsx from 'clsx';

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
const columns = [
  { field: 'id', headerName: 'D_machineId', width: 100,renderCell: renderCellExpand,
},
  { field: 'Percentile', headerName: '95Percentile', width: 100 },
  { field: 'max', headerName: 'Max', width: 100 },
  {
    field: 'min',
    headerName: 'Min',
    type: 'number',
    width: 100,
  },
  {
    field: 'mean',
    headerName: 'Mean',
    width: 130,
    cellClassName: (params) => {
        
        return clsx('super-app-positive', {
        //   negative: params.row.min < 0,
          positive: params.row.min > 0
        });
      }
  }
];

const rows = [
  { id: "Mandatory zero administration ability",Percentile: '12.8s', max: '18.8s', min: '43.2s', mean: "12.23s" },
  { id: "Machine2", Percentile: '13.8s',max: '17.8s', min: '34.2s', mean: "12.3s" },
  { id: "Machine3", Percentile: '14.8s',max: '16.8s', min: '432.2s', mean: "13.3s" },
  { id: "Machine4", Percentile: '18.8s',max: '15.8s', min: '23.2s', mean: "16.3s" },
  { id: "Machine5",Percentile: '17.8s', max: '14.8s', min: '13.2s', mean: "32.2s" },
  { id: "Machine6", Percentile: '16.8s',max: '13.8s', min: "12.2s", mean: "15.0s" },
 
];



export default function Table() {
  return (
    <div style={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        hideFooter
        showCellRightBorder
        rowsPerPageOptions={[]}
        sx={{
        
        
          }}
      />
    </div>
  );
}
