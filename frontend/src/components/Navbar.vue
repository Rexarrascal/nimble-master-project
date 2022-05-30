<script>
export default {
  name: "Navbar",
};
</script>

<template>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Drug Order App</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/customers">Customers</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/pharmacies">Pharmacies</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/drugs">Drugs</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">
              <span class="glyphicon glyphicon-user"></span>  Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              <span class="glyphicon glyphicon-log-in"></span>  Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</body>
</template>
