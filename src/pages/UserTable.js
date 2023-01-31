import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useSortBy, useTable } from "react-table";
import { Link } from "react-router-dom";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      background-color: #f1c40f;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function snakeCaseToPlainText(str) {
    return str
        .split("_")
        .map((token) => `${token[0].toUpperCase()}${token.slice(1)}`)
        .join(" ");
}

export default function UserTable({ data = [] }) {
    const internalData = useMemo(() => {
        return data.map((entry) => ({ ...entry, participants: entry.participants?.length || 0 }))
    }, [data])

    // Use the state and functions returned from useTable to build your UI
    const columns = useMemo(
        () =>
            internalData?.length
                ? Object.keys(internalData[0]).map((accessor) => ({
                    Header: snakeCaseToPlainText(accessor),
                    accessor
                }))
                : [],
        [internalData]
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data: internalData
        },
        useSortBy
    );


    // Render the UI for your table
    return (
        <Styles>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        console.log(row)
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>

                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>
                                        <Link to={`/edit/${row.original.uid}`} >{cell.render("Cell")} </Link>
                                    </td>;
                                })}

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Styles>
    );
}

// function AccountsTable() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function loadData() {
//       const studentData = await getAllStudents();
//       setData(studentData);
//     }
//     loadData();
//   }, []);

//   return (
//     <Styles>
//       <Table data={data} />
//     </Styles>
//   );
// }

// export default AccountsTable;
