import React from "react";
import * as component from "../../component/index";
import * as common from "../../common/common.import";
import * as common_func from "../../common/common.function";
import * as common_Hdr from "../../common/table.headers";
import "./index.css";
import { RiDownloadLine } from "react-icons/ri";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

export default function Cities() {
  const location = common.useLocation();

  console.log("location", location.pathname);

  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  return (
    <React.Fragment>
      <common_func.SplitPathName path={location.pathname} />
      <component.CardLayout>
        <div className="card-container">
          <div className="container-fluid p-3">
            <div className="row">
              <div className="col-8 pl-4">
                <component.Search 
                placeholder={"Search Oders..."}
                />
              </div>
              <div className="col-4 action-container">
                <component.ImportButton menu={menu} />
                <component.AddButton />
              </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                  <component.CommonTable tableHdr={common_Hdr.ContactTable} tableData={[1,2,3,4]} />
                </div>
              </div>
              <div class="row mt-5 text-right">
                <div class="col">
                  <nav aria-label="...">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active">
                        <span class="page-link">
                          2
                        </span>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
          </div>
        </div>
      </component.CardLayout>
    </React.Fragment>
  );
}
