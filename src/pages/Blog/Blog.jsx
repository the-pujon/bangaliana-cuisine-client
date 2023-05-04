import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="text-white absolute top-20 bg-black/70 p-4">
        {/* Question 1 */}
        <div>
          <p>
            Tell us the differences between uncontrolled and controlled
            components.
          </p>
          <p>
            In react uncontrolled components called the components that manage
            their own state internally. On the other hand controlled components
            called the components that rely on external state management.
          </p>
        </div>

        <div>
          <p>How to validate React props using PropTypes?</p>
          <p>
            We can validate React props using PropTypes by following code
            snippet
            <pre>
              {` Component.propTypes = {
  anyProp: PropTypes.any,
  booleanProp: PropTypes.bool,
  numberProp: PropTypes.number,
  stringProp: PropTypes.string,
  functionProp: PropTypes.func,
  arrayProp: PropTypes.array,
  objectPerop: PropTypes.object,
  symbolProp: PropTypes.symbol,
}`}
            </pre>
          </p>
        </div>

        <div>
          <p>Tell us the difference between nodejs and express js</p>
          <p>
            Express is a minimal and flexible node. js web application
            framework. On the other hand Node. js is an open-source, JavaScript
            runtime environment and library for running web applications outside
            the client's browser
          </p>
        </div>

        <div>
          <p>What is a custom hook, and why will you create a custom hook?</p>
          <p>
            If we made our own hook for utilize our project or project source
            with maintaining proper hook rules then this hook called custom
            hook.
            <br />
            We should create custom hook for better reusability and for
            simplified our code
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
//import React from "react";
//import ReactDOM from "react-dom";
//import Pdf from "react-to-pdf";
//import Navbar from "../../components/Navbar/Navbar";

////import "./styles.css";
//const ref = React.createRef();

//function Blog() {
//  return (
//    <>
//      <Navbar />
//      <div className="absolute top-16 text-white  bg-black/70 p-4 backdrop-blur-sm">
//        <Pdf targetRef={ref} filename="code-example.pdf">
//          {({ toPdf }) => (
//            <button
//              onClick={toPdf}
//              className="btn bg-amber-500 border-0 mx-auto"
//            >
//              Download Pdf
//            </button>
//          )}
//        </Pdf>
//        <div ref={ref} className="mt-4  text-white  bg-black/40 p-4 ">
//          {/* Question 1 */}
//          <div>
//            <p className="text-xl font-medium">
//              Tell us the differences between uncontrolled and controlled
//              components.
//            </p>
//            <p className="ps-10">
//              In react uncontrolled components called the components that manage
//              their own state internally. On the other hand controlled
//              components called the components that rely on external state
//              management.
//            </p>
//          </div>
//          {/* Question 2 */}
//          <div className="my-6">
//            <p className="text-xl font-medium">
//              How to validate React props using PropTypes?
//            </p>
//            <p className="ps-10">
//              We can validate React props using PropTypes by following code
//              snippet
//              <pre>
//                {` Component.propTypes = {
//  anyProp: PropTypes.any,
//  booleanProp: PropTypes.bool,
//  numberProp: PropTypes.number,
//  stringProp: PropTypes.string,
//  functionProp: PropTypes.func,
//  arrayProp: PropTypes.array,
//  objectPerop: PropTypes.object,
//  symbolProp: PropTypes.symbol,
//}`}
//              </pre>
//            </p>
//          </div>
//          {/* Question 3 */}
//          <div>
//            <p className="text-xl font-medium">
//              Tell us the difference between nodejs and express js
//            </p>
//            <p className="ps-10">
//              Express is a minimal and flexible node. js web application
//              framework. On the other hand Node. js is an open-source,
//              JavaScript runtime environment and library for running web
//              applications outside the client's browser
//            </p>
//          </div>

//          {/* Question 4 */}
//          <div className="my-6">
//            <p className="text-xl font-medium">
//              What is a custom hook, and why will you create a custom hook?
//            </p>
//            <p className="ps-10">
//              If we made our own hook for utilize our project or project source
//              with maintaining proper hook rules then this hook called custom
//              hook.
//              <br />
//              We should create custom hook for better reusability and for
//              simplified our code
//            </p>
//          </div>
//        </div>
//      </div>
//    </>
//  );
//}

//export default Blog;
