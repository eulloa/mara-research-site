import React, {ReactNode} from "react";

import {Bar} from "./bar";
import {Baz} from "./baz";
import {Foo} from "./foo";

interface INewsItem  {
    active: boolean;
    component: ReactNode;
}

export const newsItems: { ["string"]: INewsItem } = {
    "news": {
        active: true,
        component: <Bar />,
    },
    "events": {
        active: false,
        component: <Baz />,
    },
    "other": {
        active: false,
        component: <Foo />
    }
};

