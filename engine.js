/* ScopeGuard engine - pure scope-creep math, shared by app.html and node tests. */
(function(root, factory){
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.ScopeGuardEngine = factory();
})(typeof self !== 'undefined' ? self : this, function(){

  function reqCost(hours, rate){
    return hours * rate;
  }

  function creepCost(requests, rate){
    return requests.reduce(function(s, r){ return s + reqCost(r.hours, rate); }, 0);
  }

  function creepHours(requests){
    return requests.reduce(function(s, r){ return s + r.hours; }, 0);
  }

  function pctOver(creep, fixedPrice){
    return fixedPrice > 0 ? creep / fixedPrice : 0;
  }

  /* healthy <10% | creeping 10-25% | blown >25% */
  function status(pct){
    if (pct > 0.25) return {key:'blown', label:'scope blown'};
    if (pct >= 0.10) return {key:'creeping', label:'scope creeping'};
    return {key:'healthy', label:'on scope'};
  }

  /* ready-made change-order text for one request */
  function changeOrder(project, client, desc, hours, rate){
    var cost = reqCost(hours, rate);
    return 'Hi ' + client + ',\n\n' +
      'Happy to take care of "' + desc + '" for ' + project + '. Since it falls outside the original fixed scope, ' +
      'I will treat it as a change order: about ' + hours + (hours === 1 ? ' hour' : ' hours') + ' at my usual rate, roughly $' +
      Math.round(cost).toLocaleString('en-US') + '. ' +
      'Just confirm and I will slot it in.\n\nThanks!';
  }

  function money(n){
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function fmtHours(h){
    return (Math.round(h * 10) / 10) + (h === 1 ? ' hr' : ' hrs');
  }

  return {reqCost:reqCost, creepCost:creepCost, creepHours:creepHours, pctOver:pctOver, status:status, changeOrder:changeOrder, money:money, fmtHours:fmtHours};
});
