import './sidebar.css'

function Sidebar({handleClickCombo, handleClickCate, allTiposCombos, allCategorias, handleClickComboXTipo, handleClickProdXCate}) {

  return (

    <div class="mt-3 text-large mi-div">
      <div class="row">
        {/* Boton de Combos */}
        <button type='button' className='btn btn-outline-warning my-2 btn-lg' onClick={handleClickCombo}>Combos</button>
        <div class='col-12 d-none d-md-block'>
          <ul class="list-unstyled container-fluid">
          {
            allTiposCombos.map((t) =>{
              return (
                  <li>
                    <button value={t.name} type="button" class="btn btn-warning py-3 my-2 w-100" onClick={handleClickComboXTipo} key={t.id}>{t.name}</button>
                  </li>
            )})
          }
          </ul>
        </div>

        {/* Boton de Productos */}
        <button type='button' className='btn btn-outline-danger my-2 btn-lg' onClick={handleClickCate}>Productos</button>
        <div class='col-12 d-none d-md-block'>
            <ul class="list-unstyled container-fluid">
            {
              allCategorias.map((c) =>{
                return (
                    <li>
                      <button value={c.name} type="button" class="btn btn-danger py-3 my-2 w-100" onClick={handleClickProdXCate} key={c.id}>{c.name}</button>
                    </li>
              )})
            }
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;