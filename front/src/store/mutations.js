const setUser = (state, user) => {
  state.user.data = user;
};

const setToken = (state, token) => {
  state.user.token = token;
  token
    ? sessionStorage.setItem("TOKEN", token)
    : sessionStorage.removeItem("TOKEN");
};

const setProducts = (state, [loading, data = null]) => {
  if (data)
    state.products = {
      ...state.products,
      data: data.data,
      links: data.meta?.links,
      page: data.meta.current_page,
      limit: data.meta.per_page,
      from: data.meta.from,
      to: data.meta.to,
      total: data.meta.total,
    };
  state.products.loading = loading;
};

const setUsers = (state, [loading, data = null]) => {
  if (data)
    state.users = {
      ...state.users,
      data: data.data,
      links: data.meta?.links,
      page: data.meta.current_page,
      limit: data.meta.per_page,
      from: data.meta.from,
      to: data.meta.to,
      total: data.meta.total,
    };

  state.products.loading = loading;
};

const setCustomers = (state, [loading, data = null]) => {
  if (data)
    state.customers = {
      ...state.customers,
      data: data.data,
      links: data.meta?.links,
      page: data.meta.current_page,
      limit: data.meta.per_page,
      from: data.meta.from,
      to: data.meta.to,
      total: data.meta.total,
    };

  state.products.loading = loading;
};

const setOrders = (state, [loading, data = null]) => {
  if (data)
    state.orders = {
      ...state.orders,
      data: data.data,
      links: data.meta?.links,
      page: data.meta.current_page,
      limit: data.meta.per_page,
      from: data.meta.from,
      to: data.meta.to,
      total: data.meta.total,
    };
  state.orders.loading = loading;
};

const showToast = (state, message) => {
  state.toast.show = true;
  state.toast.message = message;
};

const hideToast = (state) => {
  state.toast.show = false;
  state.toast.message = "";
};

const setCountries = (state, countries) => {
  state.countries = countries.data;
};
