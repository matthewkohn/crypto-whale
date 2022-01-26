import { Sparklines, SparklinesLine } from "react-sparklines";

const chartStyles = {
  background: "#00bdcc", 
  height: "80%", 
  width: "100%", 
  borderRadius: 5, 
  padding: 2
}

export default function columns() {
  return [
    { field: 'rank', 
      headerName: 'Rank', 
      width: 80, 
      sortable: true,
      description: 'Rank by Market Cap Size',
    },
    {
      field: 'image',
      headerName: 'Logo',
      renderCell: (params: GridRenderCellParams) => (
        <>
          <img
            src={params.formattedValue}
            alt={params.id}
            style={{width: 40}}
            />
        </>
      ),
      width: 100,
      sortable: false,
    },
    {
      field: 'symbol',
      headerName: 'Symbol',
      width: 140,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      renderCell: (params: GridRenderCellParams) => (
        <h2>{params.formattedValue}</h2>
      ),
    },
    {
      field: 'price',
      headerName: 'Current Value',
      sortable: true,
      type: 'number',
      width: 140,
    },
    {
      field: 'change',
      headerName: '24hr Change',
      sortable: true,
      type: 'number',
      width: 140,
    },
    {
      field: 'sparkline',
      headerName: 'Past 7 days',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => (
        <>
          {/* {console.log(params)} */}
          <Sparklines data={params.formattedValue} style={chartStyles} margin={1}  >
            <SparklinesLine style={{ stroke: "white", fill: "none" }} />
          </Sparklines>
        </>
      ),
      sortable: false,
      type: 'number',
      width: 240,
    },
  ];
}