const sum = (a, b) => a + b;
function* tstest1() {
  const result = yield Object.defineProperty(sum(1, 2), Symbol.for("@@redux-saga/LOCATION"), {
    value: {
      fileName: "typescript/source.js (source.ts)",
      lineNumber: 5,
      code: "sum(1, 2)"
    }
  });
  return result;
}
Object.defineProperty(tstest1, Symbol.for("@@redux-saga/LOCATION"), {
  value: {
    fileName: "typescript/source.js (source.ts)",
    lineNumber: 4,
    code: null
  }
})
const z = 1; // that's hack. since there's a problem with babel https://github.com/babel/babel/issues/7002
//# sourceMappingURL=source.js.map
