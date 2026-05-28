// =====================================================================
// GGE CASH — Configuracao Supabase
// =====================================================================
// Usa o mesmo projeto Supabase do GGE Painel (opceujqpqyvxsatzdarg)
// Tabelas isoladas com prefixo cash_*
// =====================================================================

window.GGE_SUPABASE_URL = 'https://opceujqpqyvxsatzdarg.supabase.co';
window.GGE_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wY2V1anFwcXl2eHNhdHpkYXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NzIwMDEsImV4cCI6MjA4OTA0ODAwMX0.XKhgaNBJF8xiHiGEWEs8HL1dq5KFJpo2_RQckjsY9kc';

// Helper de formatacao de numero como moeda BR
window.fmtBRL = function(n) {
  if (n === null || n === undefined || isNaN(n)) return 'R$ 0,00';
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// Helper de data brasileira
window.fmtDateBR = function(d) {
  if (!d) return '';
  var dt = (d instanceof Date) ? d : new Date(d);
  if (isNaN(dt.getTime())) return '';
  return dt.toLocaleDateString('pt-BR');
};

// Helper: numero da semana ISO 8601
window.semanaIso = function(d) {
  var dt = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  var dayNum = dt.getUTCDay() || 7;
  dt.setUTCDate(dt.getUTCDate() + 4 - dayNum);
  var anoStart = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1));
  var semana = Math.ceil((((dt - anoStart) / 86400000) + 1) / 7);
  return { ano: dt.getUTCFullYear(), semana: semana };
};

// Helper: primeira segunda da semana ISO
window.inicioSemanaIso = function(ano, semana) {
  var simple = new Date(Date.UTC(ano, 0, 1 + (semana - 1) * 7));
  var dow = simple.getUTCDay();
  var segunda = new Date(simple);
  if (dow <= 4) segunda.setUTCDate(simple.getUTCDate() - simple.getUTCDay() + 1);
  else segunda.setUTCDate(simple.getUTCDate() + 8 - simple.getUTCDay());
  return segunda;
};
