import { r as t, j as s } from "./index-CQc5Q_hC.js";
import { u as m } from "./Landing-B7Tvq4t9.js";
import { c as r } from "./CompaniesList-Cml3lTah.js";
const u = t.memo(function () {
    const [e, a] = t.useState(0);
    return (
      m(e, a, r.length - 5, !0),
      s.jsxs(s.Fragment, {
        children: [
          s.jsx("div", { className: "hr" }),
          s.jsxs("section", {
            className: "companies_list",
            children: [
              s.jsx("div", {
                className: "as_seen_in",
                children: s.jsx("h5", { children: "AS SEEN IN" }),
              }),
              s.jsx(l, { imgIndex: e }),
            ],
          }),
          s.jsx("div", { className: "hr" }),
        ],
      })
    );
  }),
  l = ({ imgIndex: n }) => {
    const e = t.useRef(null),
      [a, c] = t.useState(0);
    let o = a * n;
    return (
      t.useEffect(() => {
        e.current && c(e.current.offsetWidth + 40);
      }, [n]),
      s.jsx("div", {
        className: "companies_container",
        children: s.jsx("div", {
          className: "companies_inner_container",
          style: { transform: `translateX(-${o}px)` },
          children: r.map((i) =>
            s.jsx(
              "div",
              { ref: e, className: "top_copm_item", children: s.jsx("img", { src: i.src }) },
              i.id
            )
          ),
        }),
      })
    );
  };
export { u as default };
