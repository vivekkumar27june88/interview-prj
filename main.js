function rec(a, open, close, op, n) {
  // Base condition, when the combination is created.
  if (a.length === 2 * n) {
    op = op.push(a.join(""));
  }

  if (open < n) {
    a.push("(");
    rec(a, open + 1, close, op, n);
    a.splice(a.length - 1, 1);
  }

  if (close < open) {
    a.push(")");
    rec(a, open, close + 1, op, n);
    a.splice(a.length - 1, 1);
  }
}

function generate(ip) {
  if (!ip) {
    return "UNDEFINED_IP";
  }
  if (ip && ip.length % 2 !== 0) {
    return "INVALID_IP";
  }

  op = [];
  rec([], 0, 0, op, ip.length / 2);
  return op;
}

module.exports = generate;
