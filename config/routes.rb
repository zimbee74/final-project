Rails.application.routes.draw do
  get '/app' => 'pages#app', as: 'app'

  # Rails login_path
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  # ajax routes:

  # Posts
  get '/latest' => 'posts#latest'
  get '/posts/:id' => 'posts#show'
  post '/posts' => 'posts#create'
  post '/posts/:id' => 'posts#update'


  # Users
  resources :users, except: [:index, :show]
  get '/users' => 'users#index'
  get '/users/:id' => 'users#show'
  post '/users/:id' => 'users#update'

  # get '/users/:id' => 'users#new'
  # post '/users/:id' => 'users#create'
  # delete '/users/:id' => 'users#destroy'

  # resources :users
  # resources :posts
  # get "/posts/:id/add" => "posts#add_post", as: "add_post"
end
