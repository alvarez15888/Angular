import { createAction } from '@ngrx/store';

export const incrementar = createAction('[Contador] Incrementar', (valor: number) => ({ valor }));
export const decrementar = createAction('[Contador] Decrementar', (valor: number) => ({ valor }));
export const reiniciar = createAction('[Contador] Reiniciar');
