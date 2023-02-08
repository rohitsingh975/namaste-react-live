import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const logo = header.getAllByTestId("logo");

    //Check if logo is loaded
    expect(logo[0].src).toBe("http://localhost/dummy.png")
});


test("Online status should be green on rendering header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const onlineStatus = header.getByTestId("online-status");

    expect(onlineStatus.innerHTML).toBe("✅");
});

test("Online should have 0 items on rendering header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart - 0 items");
});