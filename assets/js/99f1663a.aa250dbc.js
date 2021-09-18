(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?r.a.createElement(d,i(i({ref:t},b),{},{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var a=n(16),r=n(131);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,l=o.forcePrependBaseUrl,i=void 0!==l&&l,c=o.absolute,b=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},131:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(104)),l=n(115),i={id:"arch",title:"Architecture"},c={unversionedId:"arch",id:"arch",isDocsHomePage:!1,title:"Architecture",description:"Cylon is a data engineering toolkit designed to work with AI/ML systems and",source:"@site/docs/arch.md",sourceDirName:".",slug:"/arch",permalink:"/docs/arch",editUrl:"https://github.com/cylondata/cylon/edit/master/docs/docs/arch.md",version:"current",frontMatter:{id:"arch",title:"Architecture"},sidebar:"someSidebar",previous:{title:"MPI",permalink:"/docs/mpi"},next:{title:"Cylon Release 0.4.1",permalink:"/docs/release/0.4.1"}},b=[{value:"Data Model",id:"data-model",children:[]},{value:"Operators",id:"operators",children:[]},{value:"Communication Layer",id:"communication-layer",children:[]},{value:"Transport Layer",id:"transport-layer",children:[]},{value:"<em>Data Processing Everywhere</em>",id:"data-processing-everywhere",children:[{value:"Data Processing Library",id:"data-processing-library",children:[]},{value:"Data Processing Framework",id:"data-processing-framework",children:[]}]},{value:"Performance results",id:"performance-results",children:[]}],s={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/cylondata/cylon"},"Cylon")," is a data engineering toolkit designed to work with AI/ML systems and\nintegrate with data processing systems. ",Object(o.b)("em",{parentName:"p"},'"Data engineering everywhere"')," is the main vision of Cylon. "),Object(o.b)("img",{alt:"Data Engineering Everywhere",src:Object(l.a)("img/docs/wheel.png")}),Object(o.b)("p",null,"It can be deployed either as a library or a framework.\nBig Data systems like ",Object(o.b)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark"),", ",Object(o.b)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),", ",Object(o.b)("a",{parentName:"p",href:"https://twister2.org/"},"Twister2"),", etc may use Cylon to boost the performance\nin the ETL pipeline. For AI/ML systems like ",Object(o.b)("a",{parentName:"p",href:"https://pytorch.org/"},"PyTorch"),", ",Object(o.b)("a",{parentName:"p",href:"https://www.tensorflow.org/"},"Tensorflow")," and ",Object(o.b)("a",{parentName:"p",href:"https://mxnet.apache.org/"},"Apache MXNet"),",\nCylon acts as a library to enhance ETL performance. Additionally, Cylon is being expanded to perform as a generic framework\nfor supporting ETL and efficient distributed modeling of AI/ML workloads. "),Object(o.b)("p",null,'Cylon currently provides a set of distributed data-parallel operators to extract, transform and load structured\nrelational data. These operators are exposed as APIs in multiple programming languages (e.g., C++, Python, Java)\nthat are commonly used in Machine Learning and Artificial Intelligence platforms, enabling tight integration with them.\nWhen an operator is invoked in any of these platforms, that invocation is delegated to the "Core Cylon" framework,\nwhich implements the actual logic to perform the operation in a distributed setting.'),Object(o.b)("img",{alt:"Core Cylon Architecture",src:Object(l.a)("img/docs/arch.png")}),Object(o.b)("h2",{id:"data-model"},"Data Model"),Object(o.b)("p",null,"Cylon workloads can be categorized as Online Analytical Processing (OLAP). The data layer of Cylon is based on ",Object(o.b)("a",{parentName:"p",href:"https://arrow.apache.org/"},"Apache Arrow"),".\n",Object(o.b)("em",{parentName:"p"},"Arrow Columnar Format")," provides the foundation for Cylon Table API. "),Object(o.b)("p",null,"Using Apache Arrow has a number of advantages. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Seamless integration of other open source frameworks (ex: Spark, Pandas, Parquet, NumPy, etc)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Zero copy reads, which drastically reduces the overhead of switching between language runtimes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Allows SIMD operations on columns, data locality and cache, and effective compression of data."))),Object(o.b)("h2",{id:"operators"},"Operators"),Object(o.b)("p",null,"Cylon offers both ",Object(o.b)("em",{parentName:"p"},"local")," and ",Object(o.b)("em",{parentName:"p"},"distributed")," operations. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Local operators")," - Work entirely on the data available and accessible locally to the process (Do not use network layer)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Distributes Operators")," - Use the network layer at one or multiple points during the operator\u2019s life-cycle\n(beginning, middle, or end) and apply ",Object(o.b)("em",{parentName:"p"},"local operators")," once the partitions are collected at each local process"))),Object(o.b)("p",null,"Following operators are currently available in Cylon. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Select")," - Filters out a set of rows based on the values of all or a subset of columns")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Project")," - Creates a simpler view of an existing table by dropping one or more columns (It is considered the\ncounterpart of Select, which works on columns instead of rows.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Join")," - Combines two tables based on the values of a common column (Inner, Left Outer, Right Outer, Full Outer\njoins are supported). Currently Cylon joins provide ",Object(o.b)("em",{parentName:"p"},"sort")," and ",Object(o.b)("em",{parentName:"p"},"hash")," join algorithms. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Union")," - Concatenates two homogeneous tables (those having similar schema)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Intersect")," - Produces similar(equal) rows from two homogeneous tables")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Difference")," - Takes the difference between two tables "))),Object(o.b)("h2",{id:"communication-layer"},"Communication Layer"),Object(o.b)("p",null,"The communication layer of Cylon is currently implemented on OpenMPI. An implementation based on UCX is on the road-map\nwhich will enhance Cylon\u2019s compatibility to run on a wide variety of hardware devices such as GPUs, and different\nprocessor architectures. Transport layer options will also be widened with different communication layer implementations.\nCylon uses synchronized producers and consumers for transferring messages."),Object(o.b)("h2",{id:"transport-layer"},"Transport Layer"),Object(o.b)("p",null,"Currently, Cylon has the capability to communicate using any transport layer protocol supported by OpenMPI,\nincluding TCP and Infiniband. Additionally, all the tuning parameters of OpenMPI are applicable for Cylon\nsince the initial implementation is entirely written based on the OpenMPI framework."),Object(o.b)("h2",{id:"data-processing-everywhere"},Object(o.b)("em",{parentName:"h2"},"Data Processing Everywhere")),Object(o.b)("h3",{id:"data-processing-library"},"Data Processing Library"),Object(o.b)("p",null,"Cylon can be directly imported as a library to an application written in another framework. In a Python program, this\nintegration is a simple module import. Cylon Python API currently supports Google Colab with an experimental version\nand supports Jupyter Notebooks with fully-fledged compatibility."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from torch import Tensor as TorchTensor\nfrom pycylon.data.table import Table, csv_reader\n#...\n\nfile = "data.csv"\ntb = csv_reader.read(file, ",")\n\n# Does data pre-processing\n#...\n\ntb_arw = Table.to_arrow(tb)\nnpy = tb_arw.to_pandas().to_numpy()\ntensor = torch.from_numpy(npy)\n#...\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#include <net/mpi/mpi_communicator.h>\n#include <ctx/cylon_context.h>\n#include <cylon/table.hpp>\n\nusing namespace cylon;\n//...\n\nint main(int argc, char *argv[]) {\n  std::shared_ptr<Table> table1, table2, joined;\n\n  // initializing cylon in distributed mode\n  auto mpi_config = new MPIConfig();\n  auto ctx = CylonContext::InitDistributed(mpi_config);\n  auto read_options = CSVReadOptions().UseThreads(true);\n\n  // loading multiple table partitions concurrently\n  auto status = Table::FromCSV(ctx, {\n      "/path/to/csv1.csv",\n      "/path/to/csv2.csv"\n  }, {table1, table2}, read_options);\n\n  if (status.is_ok()) {\n    auto join_config = JoinConfig::InnerJoin(0, 0);\n    auto join_status = table1->DistributedJoin(table2, join_config, &joined);\n    if (join_status.is_ok()) { // writing the partition of this worker back to the disk\n      WriteCSV(joined, "/path/to/out.csv");\n    } else {\n      // failed\n    }\n  } else {\n    // failed\n  }\n  ctx->Finalize();\n  return 0;\n}\n')),Object(o.b)("h3",{id:"data-processing-framework"},"Data Processing Framework"),Object(o.b)("p",null,"Cylon can also perform as a separate standalone distributed framework to process data. As a distributed framework, Cylon\nshould bring up the processes in different cluster management environments such as Kubernetes, Slurm and Yarn. Cylon has\na distributed backend abstraction to plug in various cluster process management systems. Currently, it works as a\nstandalone framework with the MPI backend."),Object(o.b)("h2",{id:"performance-results"},"Performance results"),Object(o.b)("p",null,"Following is the Cylon performance on Joins against Apache Spark and Dask. "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Workers"),Object(o.b)("th",{parentName:"tr",align:null},"Dask Time ","(","s",")"),Object(o.b)("th",{parentName:"tr",align:null},"Spark Time ","(","s",")"),Object(o.b)("th",{parentName:"tr",align:null},"Cylon Time ","(","s",")"),Object(o.b)("th",{parentName:"tr",align:null},"Cylon v","."," Dask"),Object(o.b)("th",{parentName:"tr",align:null},"Cylon v","."," Spark"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"1"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"586",".","5"),Object(o.b)("td",{parentName:"tr",align:null},"141",".","5"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"4",".","1x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"2"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"332",".","8"),Object(o.b)("td",{parentName:"tr",align:null},"116",".","2"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"2",".","9x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"4"),Object(o.b)("td",{parentName:"tr",align:null},"246",".","7"),Object(o.b)("td",{parentName:"tr",align:null},"207",".","1"),Object(o.b)("td",{parentName:"tr",align:null},"56",".","5"),Object(o.b)("td",{parentName:"tr",align:null},"4",".","4x"),Object(o.b)("td",{parentName:"tr",align:null},"3",".","7x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"8"),Object(o.b)("td",{parentName:"tr",align:null},"134",".","6"),Object(o.b)("td",{parentName:"tr",align:null},"119",".","0"),Object(o.b)("td",{parentName:"tr",align:null},"27",".","4"),Object(o.b)("td",{parentName:"tr",align:null},"4",".","9x"),Object(o.b)("td",{parentName:"tr",align:null},"4",".","3x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"16"),Object(o.b)("td",{parentName:"tr",align:null},"134",".","2"),Object(o.b)("td",{parentName:"tr",align:null},"62",".","3"),Object(o.b)("td",{parentName:"tr",align:null},"13",".","2"),Object(o.b)("td",{parentName:"tr",align:null},"10",".","1x"),Object(o.b)("td",{parentName:"tr",align:null},"4",".","7x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"32"),Object(o.b)("td",{parentName:"tr",align:null},"113",".","1"),Object(o.b)("td",{parentName:"tr",align:null},"39",".","6"),Object(o.b)("td",{parentName:"tr",align:null},"7",".","0"),Object(o.b)("td",{parentName:"tr",align:null},"16",".","1x"),Object(o.b)("td",{parentName:"tr",align:null},"5",".","6x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"64"),Object(o.b)("td",{parentName:"tr",align:null},"109",".","0"),Object(o.b)("td",{parentName:"tr",align:null},"22",".","2"),Object(o.b)("td",{parentName:"tr",align:null},"4",".","0"),Object(o.b)("td",{parentName:"tr",align:null},"27",".","4x"),Object(o.b)("td",{parentName:"tr",align:null},"5",".","6x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"128"),Object(o.b)("td",{parentName:"tr",align:null},"70",".","6"),Object(o.b)("td",{parentName:"tr",align:null},"18",".","1"),Object(o.b)("td",{parentName:"tr",align:null},"2",".","5"),Object(o.b)("td",{parentName:"tr",align:null},"28",".","1x"),Object(o.b)("td",{parentName:"tr",align:null},"7",".","2x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"160"),Object(o.b)("td",{parentName:"tr",align:null},"68",".","9"),Object(o.b)("td",{parentName:"tr",align:null},"18",".","0"),Object(o.b)("td",{parentName:"tr",align:null},"2",".","3"),Object(o.b)("td",{parentName:"tr",align:null},"30",".","0x"),Object(o.b)("td",{parentName:"tr",align:null},"7",".","8x")))),Object(o.b)("img",{alt:"Cylon Join Performance",src:Object(l.a)("img/docs/join.png")}))}p.isMDXComponent=!0}}]);