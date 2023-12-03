import type { PostgrestResponse, PostgrestSingleResponse } from "@supabase/supabase-js";
import supabase from "./supabase";

type Id = string;
type Payload = object;
type Data = null;


export default {
    create: async (payload: Payload): Promise<PostgrestSingleResponse<Data>> => await supabase
        .from('table')
        .insert(payload)
        .select()
        .maybeSingle(),

    readAll: async (): Promise<PostgrestResponse<Data>> => await supabase
        .from('table').
        select('*').
        order('created_at'),

    readOne: async (id: Id): Promise<PostgrestSingleResponse<Data>> => await supabase
        .from('table')
        .select()
        .eq('id', id)
        .maybeSingle(),

    readCSV: async (): Promise<PostgrestSingleResponse<string>> => await supabase.from('table')
        .select()
        .csv(),

    update: async (id: Id, payload: Payload): Promise<PostgrestSingleResponse<Data>> => await supabase
        .from('tables')
        .update(payload)
        .eq('id', id),

    delete: async (id: Id): Promise<PostgrestSingleResponse<Data>> => await supabase
        .from('table')
        .delete()
        .eq('id', id),
}