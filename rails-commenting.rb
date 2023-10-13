# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  # this line is showing that a new controller has been created named "BlogPosts"
  def index
    # ---2)
    @posts = BlogPost.all
    # this is an instance variable that will show all the entries in the BlogPost database
  end

  # ---3)
  def show
    # this is defining a new RESTful route to READ(CRUD)/GET(HTTP verb) an specific entry 
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new
    # this is defining a new RESTful route CREATE(CRUD)/GET(HTTP Verb) to add a new entry
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    # this is an instance variable that will create a new entry in the BlogPost database and that requires a params
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
    # this is an instance variable that will look for an specific entry in the BlogPost database and also requires a params
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    # this line is making sure that the updated entry has the required paramas as a security measure to ensure the validity of the information and to ensure that the information received is the information that we want
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
      # this line is redirecting the user to the main page after having deleted an entry
    end
  end

  # ---9)
  private
  # private is added to ensure that the information that gets passed into the database when creating, editing and updating an entry is the information that we want and it will protect our code
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
    # this line is specifying what information will be allowed to be created or modified by the user
  end
end
