export function loadMenu() {
    const menuHTML = `
      <nav class="navbar navbar-expand-lg " id="nav-bar-all"><!--navegação-->

          <!--imagem-->
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="../View/img/Logo_text.svg" alt="Bootstrap">
            </a>
          <!--fim imagem-->
    
            <!--responsive-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <!--fim responsive-->
    
            <!--inicio dos itens-->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link item-navegacao" aria-current="page" href="../View/home.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link item-navegacao" aria-current="page" href="../View/Solicitação_de_manutencao.html">Solicitação Ordem de Manutenção</a>
            </li>
                <!--dropdown-->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Cadastro
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="../View/Gerenciamento_peças.html"><i class="fa-solid fa-gear"></i>  Peças</a></li>
                      <li><a class="dropdown-item" href="../View/Gerenciamento_maquinas.html"><i class="fa-sharp-duotone fa-solid fa-industry"
                                  style="--fa-primary-color: #000770; --fa-secondary-color: #adadad;"></i>  Maquinas
                          </a></li>
                      <li><a class="dropdown-item" id="icon" href="../View/Gerenciamento_Sensores.html"><i class="fa-solid fa-eye"></i>  Sensores</a></li>
                      <li><a class="dropdown-item" id="icon" href="../View/Cadastro_usuário.html"><i class="fa-solid fa-user-secret"></i>  Usuario</a></li>
                      <li><a class="dropdown-item" href="../View/Gerenciamento_ordens_manutenção.html"><i class="fa-solid fa-helmet-safety"></i>  Manutenção</a></li>
                  </ul>
              </li>

              <!--fim do dropdown-->

            
              <li class="nav-item">
                <a class="nav-link item-navegacao" href="../View/Relatorio.html">Relatorio</a>
            </li>

              <li class="nav-item">
                  <a class="nav-link item-navegacao" href="../View/Dashboards.html">Dashboard</a>
              </li>
    
    
                <li class="nav-item">
                  <div id="login-icon"><a href="../View/Perfil.html"><i class="fa-solid fa-user"></i></a></div>
                </li>
              </ul>
            </div>
            <!--fim dos itens-->
          </div>
        </nav>
        <!--fim de nav-bar-->   
    `
    document.body.innerHTML = menuHTML;
}
