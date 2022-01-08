import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  justify-content: center;
  
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 4px solid #000000;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #000000;
  margin: 8px;
  width: 150px;
  

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 1.2);
  }

  p {
    font-weight: bold;
    color: #ffffff;
    text-align: center;    
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
