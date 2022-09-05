import React from "react";

export function CommonTable({ tableHdr, tableData, apiStatus }) {
  return (
    <React.Fragment>
      <div className="table-responsive">
        <table id="order-listing" className="table common-table">
          <thead>
            <tr>
              {tableHdr !== undefined &&
                Array.isArray(tableHdr) &&
                tableHdr.map((hdrItem, index) => {
                  return <th key={index}>{hdrItem}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {tableData !== undefined &&
              Array.isArray(tableData) &&
              tableData.map((dataItem, index) => {
                return (
                  <tr key={index}>
                    <td>test</td>
                    <td>test</td>
                    <td>Test</td>
                    <td>deebendu.kumar@zestic.in</td>
                    <td>+919872177944</td>
                    <td>Administrator</td>
                    <td>
                      <label className="badge badge-info">Available</label>
                    </td>
                    <td>
                      <img src="images/More.svg" alt="image" />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
