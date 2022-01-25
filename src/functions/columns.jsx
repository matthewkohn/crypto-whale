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
          {/* {console.log(params)} */}
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
  ];
}