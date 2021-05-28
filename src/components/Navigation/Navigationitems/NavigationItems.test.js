import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./Navigationitems";
import NavigationItem from "./Navigationitem/Navigationitem";

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(() => {
  wrapper = shallow(<NavigationItems />);
});

describe("<NavigationItems/>", () => {
  it("Should render 2 navigation items if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("Should render 3 navigation items if authenticated", () => {
    //wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("Should render 3 navigation items if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
