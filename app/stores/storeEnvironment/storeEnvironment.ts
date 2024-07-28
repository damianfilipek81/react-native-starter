/* eslint-disable class-methods-use-this */
import { supabase } from "@/app/services/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import { MMKV } from "react-native-mmkv";

interface Listener {
  remove: () => void;
}

class StoreEnvironment {
  mmkv: MMKV;
  supabase: SupabaseClient<any, "public", any>;
  listener: Listener | undefined;

  constructor() {
    this.mmkv = new MMKV();

    this.setItemWithSecureStore = this.setItemWithSecureStore.bind(this);
    this.getItemWithSecureStore = this.getItemWithSecureStore.bind(this);
    this.deleteItemWithSecureStore = this.deleteItemWithSecureStore.bind(this);
    this.setItemWithMMKV = this.setItemWithMMKV.bind(this);
    this.getItemWithMMKV = this.getItemWithMMKV.bind(this);
    this.deleteItemWithMMKV = this.deleteItemWithMMKV.bind(this);
    this.listenerValueChangeWithMMKV =
      this.listenerValueChangeWithMMKV.bind(this);
    this.removeListenerValueChangeWithMMKV =
      this.removeListenerValueChangeWithMMKV.bind(this);
    this.supabase = supabase;
  }

  async setItemWithSecureStore(key: string, value: string): Promise<void> {
    await SecureStore.setItemAsync(key, value);
  }

  async getItemWithSecureStore(key: string): Promise<string | null> {
    return await SecureStore.getItemAsync(key);
  }

  async deleteItemWithSecureStore(key: string): Promise<void> {
    await SecureStore.deleteItemAsync(key);
  }

  setItemWithMMKV(
    key: string,
    value: string | number | boolean | Uint8Array,
  ): void {
    this.mmkv.set(key, value);
  }

  getItemWithMMKV(key: string): string | undefined {
    return this.mmkv.getString(key);
  }

  deleteItemWithMMKV(key: string): void {
    this.mmkv.delete(key);
  }

  listenerValueChangeWithMMKV(callback: (key: string) => void): void {
    this.listener = this.mmkv.addOnValueChangedListener(callback);
  }

  removeListenerValueChangeWithMMKV(): void {
    if (this.listener) this.listener.remove();
  }

  saveStoreDataWithMMKV(storeName: string, data: unknown): void {
    this.mmkv.set(storeName, JSON.stringify(data));
  }

  loadStoreDataWithMMKV(storeName: string): unknown {
    const data = this.mmkv.getString(storeName);
    return data ? JSON.parse(data) : null;
  }
}

export const storeEnvironment = new StoreEnvironment();
export interface IStoreEnv {
  mmkv: MMKV;
  setItemWithSecureStore(key: string, value: string): Promise<void>;
  getItemWithSecureStore(key: string): Promise<string | null>;
  deleteItemWithSecureStore(key: string): Promise<void>;
  setItemWithMMKV(key: string, value: string): void;
  getItemWithMMKV(key: string): string | undefined;
  deleteItemWithMMKV(key: string): void;
  listenerValueChangeWithMMKV(callback: (key: string) => void): void;
  removeListenerValueChangeWithMMKV(): void;
  saveStoreDataWithMMKV(storeName: string, data: unknown): void;
  loadStoreDataWithMMKV(storeName: string): unknown;
  supabase: SupabaseClient<any, "public", any>;
}
